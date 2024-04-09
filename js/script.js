let posts = [];

function submitPost() {
    const postInput = document.getElementById('postInput');
    const content = postInput.value.trim();

    if (content !== '') {
        const post = {
            id: generateId(),
            content,
            likes: 0,
        };

        posts.unshift(post);
        renderPosts();
        postInput.value = '';
    }
}

function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

function renderPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <p>${post.content}</p>
            <button class="like-btn" onclick="likePost('${post.id}')">Me gusta</button>
            <span class="likes">${post.likes} Me gusta</span>
        `;
        postList.appendChild(postElement);
    });
}

function likePost(postId) {
    const postIndex = posts.findIndex(post => post.id === postId);
    if (postIndex !== -1) {
        posts[postIndex].likes++;
        renderPosts();
    }
}

renderPosts();
