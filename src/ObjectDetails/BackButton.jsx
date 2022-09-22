import { useNavigate } from "react-router-dom";

const BackButton = () => {
    // Move back to previous page
    const goBack = useNavigate();

    return (
        <button onClick={() => goBack(-1)} id="back-btn">BACK</button>
    );
};

export default BackButton;