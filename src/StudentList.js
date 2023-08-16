import React, { useRef, useState } from 'react';
import Student from './Student';
import CreateStudent from './CreateStudent';

function StudentList() {
    const [students, setStudents] = useState([
        {
            id: '001',
            name: 'aaa',
            age: 21,
            email: 'aaa@gmail.com'
        },
        {
            id: '002',
            name: 'bbb',
            age: 22,
            email: 'bbb@gmail.com'
        },
        {
            id: '003',
            name: 'ccc',
            age: 23,
            email: 'ccc@gmail.com'
        },
    ])

    const nextId = useRef(4);

    // 입력 폼에서 사용할 값을 state로 관리
    const [inputs, setInputs] = useState({
        name: '',
        age: '',
        email: ''
    })

    // 비구조화 할당 - state값을 각각 변수에 담기
    const {name, age, email} = inputs;

    // 데이터 변경 함수
    const onDataChange = (e) => {
        // name과 value는 값이 변경되는 input태그의 속성을 비구조화 할당 처리
        const {name, value} = e.target;

        // state값 변경
        setInputs({
            ...inputs, // 변경되는 것 외의 나머지 속성값을 의미하는 나머지패턴
            [name]: value // 내부에서 밖의 변수를 속성명으로 사용 시 [변수명]
        });
    }


    // 새롭게 배열 데이터를 추가하는 함수
    const onCreate = () => {
        // 새로운 학생 값을 담을 함수
        const student = {
            id: '00' + nextId.current,
            name,
            age,
            email
        };
        setStudents([...students, student]) // 기존 배열 뒤에 추가
    }

    // 버튼 클릭 시 값들을 다시 비우기
    setInputs({
        name: '',
        age:'',
        email: ''
    });
    nextId.current += 1; // 다음 학생을 추가할 수 있으니 id 값 증가 -> 

    return (
        <div>
            <CreateStudent
                name={name}
                age={age}
                email={email}
                onDataChange={onDataChange}
                onCreate={onCreate}
            />
            {students.map(student => <Student student={student} key={student.id} />)}
        </div>
    );
}

export default StudentList;