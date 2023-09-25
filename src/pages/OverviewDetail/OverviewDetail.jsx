import { useParams } from "react-router-dom";


function OverviewDetail() {
    const { blogId } = useParams();

    return(
        <h4>Het productnummer is {blogId}</h4>
    )
}

export default OverviewDetail;