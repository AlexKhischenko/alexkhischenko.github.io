import './HW_10.scss';

const addCommentButton = document.querySelector('#addCommentButton'),
    newElements = document.querySelector('#newElements'),
    userName = document.querySelector('#userName'),
    commentField = document.querySelector('#commentField');


function addComment() {
    const newName = document.createElement('h3'),
        newComment = document.createElement('div'),
        newUserName = userName.value,
        newUserComment = commentField.value;
    userName.value = '';
    commentField.value = '';
    console.log(newUserName);
    console.log(newComment);
    newName.classList.add('name-view');
    newComment.classList.add('comment-view');
    newName.innerHTML = newUserName;
    newComment.innerHTML = newUserComment;
    newElements.appendChild(newName);
    newElements.appendChild(newComment);
}

addCommentButton.addEventListener('click', addComment);