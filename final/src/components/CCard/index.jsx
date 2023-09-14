import slide_image_4 from "../../assets/images/img_4.jpg";

const CCard = ({data}) => {
    return (
        <div className="card">
            <div className="img"><img src={data.img} alt="slide_image" /></div>
            
            <div className="name">{data.name}</div>
            <div>{data.code}</div>
            <div>{data.class}</div>
        </div>
    )
}

export default CCard