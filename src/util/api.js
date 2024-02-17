const loginUserAPI = async ({ userId, password }) => {
  const data = {
    userId: userId,
    password: password,
  };
  try {
    const res = await fetch(`/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (e) {
    return undefined;
  }
};

const registerUserAPI = async ({ name, age, school, license, userId }) => {
  const data = {
    name: name,
    age: age,
    school: school,
    license: license,
    userId: userId,
    password: password,
  };
  try {
    const res = await fetch(`/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (e) {
    return undefined;
  }
};

const registerGoalAPI = async ({ userId, goal, period, todos }) => {
  const data = {
    userId: userId,
    goal: goal,
    period: period,
    todos: todos,
  };
  try {
    const res = await fetch(`/api/todolist/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (e) {
    return undefined;
  }
};

const getTodoAPI = async ({ userId }) => {
  try {
    const res = await fetch(`/api/todolist?id=${userId}`);
    const result = await res.json();
    return result;
  } catch (e) {
    return undefined;
  }
};

const modifyGoalAPI = async ({ userId, todoId, completed }) => {
  const data = {
    userId: userId,
    todoId: todoId,
    completed: completed,
  };
  try {
    const res = await fetch(`/api/todolist/updateCompleted`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (e) {
    return undefined;
  }
};

const cancelGoalAPI = async ({ userId }) => {
  const data = {
    userId: userId,
  };
  try {
    const res = await fetch(`/api/todolist/cancel`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (e) {
    return undefined;
  }
};

const getHelper = async ({ userId, message }) => {
  const data = {
    userId: userId,
    message: message,
  };
  try {
    const res = await fetch(`/api/todolist/chatbot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (e) {
    return undefined;
  }
};

const getRecentPosts = async ({ post }) => {
  try {
    const res = await fetch(`/api/posts?limit=${post}`);
    const result = await res.json();
    return result;
  } catch (e) {
    return undefined;
  }
};

const createPost = async ({
  userId,
  title,
  preview,
  content,
  thumbnail,
  category,
}) => {
  const data = {
    userId: userId,
    title: title,
    preview: preview,
    content: content,
    thumbnail: thumbnail,
    category: category,
  };
  try {
    const res = await fetch(`/api/posts/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (e) {
    return undefined;
  }
};

const getPost = async ({ postId }) => {
  try {
    const res = await fetch(`/api/posts?id=${postId}`);
    const result = await res.json();
    return result;
  } catch (e) {
    return undefined;
  }
};

const deletePost = async ({ userId, postId }) => {
  const data = {
    userId: userId,
    postId: postId,
  };
  try {
    const res = await fetch(`/api/posts/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (e) {
    return undefined;
  }
};
