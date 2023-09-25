import { useParams } from "react-router-dom";


function OverviewDetail() {
    const { blogId } = useParams();

    return(
        <h4>Blog artikel: {blogId}</h4>
    )
}

export default OverviewDetail;