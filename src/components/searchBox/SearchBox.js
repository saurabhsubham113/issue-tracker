const SearchBox = ({ searchChange }) => {
    return (
        <div className='searchbox'>
            <input className='searchbox-input' 
            type='search'
            placeholder='search...'
            onChange = {searchChange}
            style={inputStyle}
            />
        </div>
        
    )
}
const inputStyle = {
    outline: "none",
    padding: "10px 20px",
    borderRadius: "100px",
    border: "3px solid hsl(234, 14%, 74%)"
}
export default SearchBox;