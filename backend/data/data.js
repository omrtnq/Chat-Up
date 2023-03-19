const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Andrei",
        email: "andrei@example.com",
      },
      {
        name: "Omar",
        email: "omar@example.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "Andrei",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Demo User",
        email: "demo@example.com",
      },
      {
        name: "Omar",
        email: "omar@example.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Demo User",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Anan",
        email: "anan@example.com",
      },
      {
        name: "Omar",
        email: "omar@example.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "Anan",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Andrei",
        email: "andrei@example.com",
      },
      {
        name: "Omar",
        email: "omar@example.com",
      },
      {
        name: "Demo User",
        email: "demo@example.com",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "Coders",
    groupAdmin: {
      name: "Demo User",
      email: "demo@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "William",
        email: "william@example.com",
      },
      {
        name: "omar",
        email: "omar@example.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "William",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "John Doe",
        email: "jon@example.com",
      },
      {
        name: "Omar",
        email: "omar@example.com",
      },
      {
        name: "Demo User",
        email: "demo@example.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Coders Zone",
    groupAdmin: {
      name: "Demo User",
      email: "demo@example.com",
    },
  },
];

module.exports = { chats };
