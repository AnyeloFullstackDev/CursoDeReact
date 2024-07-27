import { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import "../styles/TwitterCard.css"

export const TwitterFollowCard = ({ initialIsFollowing, userName, image, children }) => {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        setIsFollowing(prevIsFollowing => {
            const newIsFollowing = !prevIsFollowing;
            return newIsFollowing;
        });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const buttonText = isHovered ? (isFollowing ? "Dejar de seguir" : "Seguir") : (isFollowing ? "Siguiendo" : "Seguir");

    const buttonClass = isFollowing ? "siguiendo" : "seguir";

    return (
        <Container fluid>
            <Row>
                <Col md={3} className='pt-2'>
                    <div className="d-flex align-items-center p-2 bg-dark rounded shadow-sm" style={{ height: '40px' }}>
                        <img 
                            src={`${image}`} 
                            alt="Avatar de Anyelo el mejor programador" 
                            className="rounded-circle me-2" 
                            style={{ width: '25px', height: '25px' }} 
                        />
                        <div className="d-flex flex-column flex-grow-1">
                            <div className="d-flex align-items-center mb-1">
                                <span className="text-light me-2" style={{ fontSize: '12px' }}>{children}</span>
                                <img 
                                    src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000" 
                                    alt="verified badge" 
                                    className="me-1" 
                                    style={{ width: '15px', height: '15px' }} 
                                />
                            </div>
                            <span className="text-light" style={{ fontSize: '10px' }}>@{userName}</span>
                        </div>
                        <Button
                            className={buttonClass}
                            size="sm"
                            onClick={handleClick}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {buttonText}
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
