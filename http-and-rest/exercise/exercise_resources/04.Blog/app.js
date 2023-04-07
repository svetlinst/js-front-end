function attachEvents() {
    const POSTS_BASE_URL = "http://localhost:3030/jsonstore/blog/posts";
    const COMMENTS_BASE_URL = "http://localhost:3030/jsonstore/blog/comments";

    const loadPostsButton = document.getElementById("btnLoadPosts");
    const postsDropDown = document.getElementById('posts');
    const viewPostButton = document.getElementById('btnViewPost');
    const commentsList = document.getElementById('post-comments');
    let postTitleElement = document.getElementById('post-title');
    let postBody = document.getElementById('post-body');
    let posts;

    const getPosts = async () => {
        try {
            const request = fetch(POSTS_BASE_URL);
            const data = (await request).json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    const loadPosts = async (e) => {
        posts = await getPosts();

        for (p in posts) {
            const optionElement = document.createElement('option');
            optionElement.value = p;
            optionElement.innerHTML = posts[p].title;
            postsDropDown.appendChild(optionElement);
        }
    };

    loadPostsButton.addEventListener('click', loadPosts);

    const getComments = async (postId) => {
        try {
            const request = await fetch(COMMENTS_BASE_URL);
            const data = await request.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    const loadComments = async (e) => {
        const allComments = await getComments();
        const postId = postsDropDown.value;
        commentsList.innerHTML = null;
        postTitleElement.innerHTML = null;
        postBody.innerHTML = null;

        const selectedPost = posts[postId];

        postTitleElement.textContent = selectedPost.title;
        postBody.textContent = selectedPost.body;

        Object.entries(allComments).forEach(([key, value]) => {
            if (value.postId === postId){
                const liElement = document.createElement('li');
                liElement.textContent = value.text;
                commentsList.appendChild(liElement);
            }
        });
    }

    viewPostButton.addEventListener('click', loadComments);

}

attachEvents();
