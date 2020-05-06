import React, { useState } from 'react';

export default function Example() {
    // Khai báo 1 biến số đếm, gọi là "count"
    const [count, setCount] = useState(0);

    const [status, setStatus] = useState(false);

    const blue = {
        color:'blue'
    };
    const red = {
       color:'red'
    };

    return (
        <div>
            <p>Bạn đã bấm {count} lần</p>
            <button onClick={() => setCount(count + 1)}>
                Bấm vào tôi
            </button>

            <button onClick={() => setStatus(!status)}>
                {'Đổi màu ' + (status ? 'Xanh' : 'Đỏ')}
            </button>
            <p style={status ? red :blue}>Màu</p>
        </div>
    );
}

