function updateLastUserActivityTime(user, post, deletePost) {
    const getColdDrinks = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Got cold drinks");
      }, 500);
    });
  
    const createPost = new Promise((resolve, reject) => {
      const newPost = createPostFunction(post);
      if (newPost) {
        resolve(newPost);
      } else {
        reject("Failed to create post");
      }
    });
  
    const updateActivity = new Promise((resolve, reject) => {
      const updatedUser = updateUserActivityTimeFunction(user);
      if (updatedUser) {
        resolve(updatedUser);
      } else {
        reject("Failed to update user's activity time");
      }
    });
  
    // husband gets butter promise
    const getButter = new Promise((resolve, reject) => {
      const butter = getButterFunction();
      if (butter) {
        resolve(butter);
      } else {
        reject("Failed to get butter");
      }
    });
  
    Promise.all([getButter, createPost, updateActivity])
      .then(([butter, post, user]) => {
        console.log("All promises resolved successfully!");
        console.log("Got butter:", butter);
        console.log("Created post:", post);
        console.log("User's lastActivityTime:", user.lastActivityTime);
  
        // getColdDrinks promise
        getColdDrinks
          .then((res) => {
            console.log(res);
            deletePost(post.id)
              .then((res) => {
                console.log("Deleted post:", post.id);
                console.log("New set of posts:", res);
              })
              .catch((err) => console.error(err));
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }
  