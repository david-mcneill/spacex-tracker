import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/Loading";
import { OuterWrapper } from "../styles/layout";
import colors from "../styles/colors";

const Payload = () => {
    let params = useParams();
    const url = `https://api.spacexdata.com/v4/payloads/${params.id}`;
    const [loading, setLoading] = useState(true);
    const [payloadData, setpayloadData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setpayloadData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [url]);

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <PayloadHeader>
                        <PayloadHeaderGradient />
                        <PayloadHeaderColorBackground />

                        <PayloadName>
                            <h1>{payloadData.name}</h1>
                        </PayloadName>
                    </PayloadHeader>

                    <OuterWrapper>
                        <PayloadInfo>
                            <div></div>
                        </PayloadInfo>
                    </OuterWrapper>
                </>
            )}
        </div>
    );
};

export default Payload;

export const PayloadHeader = styled.div`
    height: calc(100vh - 85px);
    position: relative;
`;

export const PayloadHeaderImageBackground = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
`;

export const PayloadHeaderColorBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${colors.shark};
`;

export const PayloadHeaderGradient = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(48, 54, 64, 0.4);
    z-index: 1;
`;

export const PayloadName = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 40px 60px;

    h1 {
        margin: 0;
        font-size: 96px;
        color: #fff;
        font-family: "Inter Light";
        text-transform: uppercase;
    }
`;

export const PayloadInfo = styled.div`
    padding: 75px 0;
`;
