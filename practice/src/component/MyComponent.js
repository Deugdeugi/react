import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MyComponent = ( { name = "기본 이름", age = 0 , ...rest } ) => {
    const [ number , setNumber ] = useState(0);

    const plus = () => {
        setNumber( number + 1 );
    }

    return (
        <>
            <p>안녕하세요, 제 이름은 { name } 입니다.</p>
            <p>저는 { age } 살입니다.</p>
            <p>숫자 : { number }</p>
            <button onClick = { plus }>더하기</button>
        </>
    )
}

MyComponent.propTypes = {
    name: PropTypes.string.isRequired
}

// MyComponent.defaultProps = {
//     name: '기본 이름'
// }

export default MyComponent;