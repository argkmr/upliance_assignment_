import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ],
};

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];

const EditorTask = () => {
    const [value, setValue] = useState('');

    useEffect(() => {
        const users: any = window.localStorage.getItem('USER_ARRAY');
        const usersArray = JSON.parse(users);
        let updateString = ""
        if (usersArray && usersArray.length > 0) {
            usersArray.forEach((user: any) => {
                updateString += `USER_ID: ${user.userId} </br>NAME: ${user.firstName} ${user.lastName}</br>EMAIL: ${user.email}</br>GENDER: ${user.gender}</br>OVERALL_EXP: ${user.overallExp}</br>REACT_EXP: ${user.reactExp}</br>PHONE: ${user.phoneNumber}</br>CITY: ${user.city}</br>RELOCATE: ${user.concent}</br></br>`
            })
            setValue(updateString);

        } else {
            setValue(updateString);
        }
    }, []);

    return (
        <>
            <div className="editor-container">
                <div className="editor-section">
                    <div className="page-heading">
                        <span>User Data Visualization</span>
                    </div>
                    <ReactQuill
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        value={value}
                        onChange={(content) => setValue(content)}
                    />
                </div>
            </div>
        </>
    );
};

export default EditorTask;
