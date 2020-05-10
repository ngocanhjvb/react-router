import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';

const PostFilterForm = props => {

    const {onFilterChange} = props

    const [searchTerm, setSearchTerm] = useState('')

    const typingTimeoutRef = useRef() // HOOK NÀY GIÚP CHO VIỆC TẠO RA MỘT OBJECT KHÔNG THAY ĐỔI TRONG CÁC LẦN RENDER (SETSTATE, PROP ....) TỪ LÚC COMPONENT SINH RA ĐẾN KHI MẤT ĐI

    const onHandleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value)
        if (!onFilterChange) return;


        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }


        typingTimeoutRef.current = setTimeout(() => {
            const formValue = {
                searchTerm: value
            }
            onFilterChange(formValue)
        }, 300)

    }

    return (
        <div>
            <form>
                <input type="text" value={searchTerm} onChange={onHandleChange}/>
            </form>
        </div>
    );
};

PostFilterForm.propTypes = {
    onFilterChange: PropTypes.func
};

export default PostFilterForm;
