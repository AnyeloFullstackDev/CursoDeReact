import 'bootstrap/dist/css/bootstrap.min.css';
import { TwitterFollowCard } from './TwitterCard';

export const App = () => {
    return (
    <>        
        <TwitterFollowCard 
            isFollowing 
            userName="TheNextFather" 
            image="https://img.freepik.com/free-photo/portrait-young-businessman-with-mustache-glasses-3d-rendering_1142-51509.jpg?t=st=1722030193~exp=1722033793~hmac=d317e524d69fcbaa2a5051788c2c1466ded5b75d04c6994b54e454ab91c0a54a&w=740" 
        >
            Anyelo Obregon
        </TwitterFollowCard>
        <TwitterFollowCard 
            isFollowing={false} 
            userName="LaMamasita"              
            image="https://img.freepik.com/premium-photo/memoji-beautiful-girl-woman-white-background-emoji_826801-6872.jpg?w=740" 
        >
            Endreina Omana
        </TwitterFollowCard>
        
        <TwitterFollowCard 
            isFollowing 
            userName="Terrestre" 
            image="https://img.freepik.com/free-photo/3d-rendering-teenager-boy-with-backpack-city_1142-55311.jpg?t=st=1722030129~exp=1722033729~hmac=6c8c705560aecf51f1ac85c7ec604f83ad260c3ee742057181b99bc1ff1951ff&w=740" 
        >
            Jose Fernandez

        </TwitterFollowCard>
        <TwitterFollowCard 
            isFollowing 
            userName="Ratatui" 
            image="https://img.freepik.com/premium-photo/memoji-happy-man-white-background-emoji_826801-6839.jpg?w=740" 
        >
            Nelson Velazquez
        </TwitterFollowCard>
    </>
    )
}