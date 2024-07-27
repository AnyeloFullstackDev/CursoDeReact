import { Container, Button, Row, Col  } from 'react-bootstrap';
import "../styles/TwitterCard.css"

export const TwitterFollowCard = ({ isFollowing, userName, children, image  }) => {
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'siguiendo' : 'siguiendo seguir'
    
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
                        <Button className={buttonClassName}  size="sm">{text}</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};