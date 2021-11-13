import React, {useState, useEffect} from 'react'
import { dbService } from '../fbase';
import { addDoc, collection, query, onSnapshot, orderBy } from "@firebase/firestore";
import { useHistory } from 'react-router';
import '../style/write.scss';

function Write({userObj, upload}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();

  const onSubmit = async(e) => {
    e.preventDefault();
    try {
        const docRef = await addDoc(collection(dbService, "posts"), {
            title: title,
            content: content,
            createdAt: Date.now(),
            creatorId: userObj,
        });
        upload = !upload;
        alert("글이 게시되었습니다");
        history.push("/");
      } catch (error) {
        console.log("Error adding document: ", error);
      }        
  };
  const onChange = (e) =>{
    const {target: {name, value}} = e;
    if (name === "bdTitle"){
      setTitle(value);
    } else if (name === "bdContent"){
    setContent(value);
    }
    
  };

  return (
    <>
          글쓰기
          <div className="writebox">
            <form onSubmit={onSubmit} /*action="writerAction"*/ method="post">
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    카테고리
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
	            <input type="hidden" name="bdGroup"></input>
	            <input type="hidden" name="bdOrder"></input>
	            <input type="hidden" name="bdIndent"></input>
	            <input type="text" name="bdTitle" class="form-control mt-4 mb-2" onChange={onChange} value={title}
	            	placeholder="제목을 입력해주세요." required
	            ></input>
	            <div class="form-group">
	            	<textarea class="form-control" rows="10" name="bdContent" onChange={onChange} value={content}
	            		placeholder="내용을 입력해주세요" required
	            	></textarea>
	            </div>
	            <button type="submit" class="btn btn-secondary mb-3">등록</button>
            </form>

          </div>  
            
        </>
    )
} 

export default Write;
