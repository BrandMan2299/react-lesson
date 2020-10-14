import React, { useEffect, useRef } from 'react';

function Form({ comments, setComments }) {
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const nameRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        titleRef.current.focus();
    }, [])

    const addComment = (e) => {
        if (titleRef.current.value && contentRef.current.value && nameRef.current.value) {
            const newComment = { title: titleRef.current.value, content: contentRef.current.value, name: nameRef.current.value };
            setComments([...comments, newComment]);
            titleRef.current.value = contentRef.current.value = nameRef.current.value = "";
            titleRef.current.focus();
        }
    }

    const onEnter = (e) => {
        if (e.keyCode === 13) {
            switch (e.target.id) {
                case 'title':
                    contentRef.current.focus();
                    break;
                case 'content':
                    nameRef.current.focus();
                    break;
                case 'name':
                    buttonRef.current.click();
                    break;
                case 'button':
                    titleRef.current.click();
                    break;
                default:
                    console.log('Not found');
                    break;
            }
        }
    }
    return (
        <div className="form" >
            <label >Title:<input id="title" ref={titleRef} onKeyUp={onEnter} /></label><br />
            <label >Content:<input id="content" ref={contentRef} onKeyUp={onEnter} /></label><br />
            <label >Name:<input id="name" ref={nameRef} onKeyUp={onEnter} /></label><br />
            <button id="button" onClick={addComment} ref={buttonRef}>Submit</button>
        </div>
    );
}

export default Form;