// get all users except the logged-in user
import Messages from "../models/messageModels.js";
import User from "../models/userModels.js";
import cloudinary from "../lib/cloudinary.js";
import { io, userSocketMap } from "../server.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const userId = req.user._id;

    // find all users except the logged-in one
    const filteredUsers = await User.find({ _id: { $ne: userId } }).select(
      "-password"
    );

    // count unseen messages from each user
    const unseenMessage = {};
    const promises = filteredUsers.map(async (user) => {
      const messages = await Messages.find({
        senderId: user._id,
        receiverId: userId,
        seen: false,
      });

      if (messages.length > 0) {
        unseenMessage[user._id] = messages.length;
      }
    });

    await Promise.all(promises);
    res.json({ success: true, users: filteredUsers, unseenMessage });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

// get all messages for selected user
export const getMessages = async (req, res) => {
  try {
    const { id: selectedUserId } = req.params;
    const myId = req.user._id;

    const messages = await Messages.find({
      $or: [
        { senderId: myId, receiverId: selectedUserId },
        { senderId: selectedUserId, receiverId: myId },
      ],
    });

    // mark messages as seen
    await Messages.updateMany(
      { senderId: selectedUserId, receiverId: myId, seen: false },
      { seen: true }
    );

    res.json({ success: true, messages });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

// mark a message as seen
export const markMessageAsSeen = async (req, res) => {
  try {
    const { id } = req.params;
    await Messages.findByIdAndUpdate(id, { seen: true });
    res.json({ success: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

// send message to selected user
export const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const receiverId = req.params.id;
    const senderId = req.user._id;

    let imageUrl;
    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage = await Messages.create({
      senderId,
      receiverId,
      text,
      image: imageUrl,
    });

    // emit the new message to the receiver's socket
    const receiverSocketId = userSocketMap[receiverId];
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.json({ success: true, message: newMessage });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
