import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import styled from "styled-components";
import colors from "../styles/colors";
import { OuterWrapper } from "../styles/layout";

const Ship = () => {
    let params = useParams();
    const url = `https://api.spacexdata.com/v4/ships/${params.id}`;
    const [loading, setLoading] = useState(true);
    const [shipData, setshipData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setshipData(data);
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
                    <ShipHeader>
                        <ShipHeaderGradient />
                        {shipData.image ? (
                            <ShipHeaderImageBackground
                                src={shipData.image}
                                alt={`${shipData.name}`}
                            />
                        ) : (
                            <ShipHeaderColorBackground />
                        )}

                        <ShipName>
                            <h1>{shipData.name}</h1>
                        </ShipName>
                    </ShipHeader>

                    <OuterWrapper>
                        <ShipInfo>
                            <div>
                                <p style={{ margin: 0 }}>
                                    Type: {shipData.type}
                                </p>
                                {shipData.model && (
                                    <p>Model: {shipData.model}</p>
                                )}
                            </div>
                        </ShipInfo>
                    </OuterWrapper>
                </>
            )}
        </div>
    );
};

export default Ship;

export const ShipHeader = styled.div`
    height: calc(100vh - 85px);
    position: relative;
`;

export const ShipHeaderImageBackground = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
`;

export const ShipHeaderColorBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${colors.shark};
`;

export const ShipHeaderGradient = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(48, 54, 64, 0.4);
    z-index: 1;
`;

export const ShipName = styled.div`
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
        font-size: 60px;
        color: #fff;
        font-family: "Inter Light";
        text-transform: uppercase;
        text-align: right;
    }
`;

export const ShipInfo = styled.div`
    padding: 75px 0;
`;
