import React, {useState, useRef, useEffect}from 'react';
import {Editor} from '@tinymce/tinymce-react'



const index = () => {
    const editorRef = useRef();
    const [content, setContent] = useState('');

        const handleEditorChange = (content, editor) => {
            setContent(content);
        };

        const customCss = `
        .tox .tox-notification {
          display: none !important;
        }
      `;
    return (
        <>
        {/* <TinyMCEEditor initialValue={content} onChange={handleContentChange}  /> */}
        <style>{customCss}</style>  
        <Editor onInt= {(evt, editor) => editorRef.current = editor} 
          initialValue={content}
          onEditorChange={handleEditorChange}
          init={{
            height: 200,
            width: 500,
            menubar: false,
            branding: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help',
          }}
        
        />
        <div>
        <h2>Editor Content</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
        
        </>
    );
}


export default index;
