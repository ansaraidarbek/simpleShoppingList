const Main = ({ data }) => {
    const newData = data.filter((el) => { if (el.id % 2 === 0) { return true } return false })
    const fillULElement = () => {
        return newData.map(el => {
            return <li key={el.id} className={el.name === 'Banana' ? 'Banana' : null}>{el.name}</li>
        })
    }
    return (
        <ul>{fillULElement()}</ul>
    );
}

export default Main;