import 'bootstrap/dist/css/bootstrap.min.css';
import { TwitterFollowCard } from './TwitterCard';

export const App = () => {
    const people = [
        {
            initialIsFollowing: true,
            userName: "tech_guru",
            name: "John Doe",
            image: "https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170441704/76561515-retrato-de-personas-estudio-disparar-con-expresi%C3%B3n-de-cara-sonriente.jpg"
        },
        {
            initialIsFollowing: false,
            userName: "beauty_queen",
            name: "Jane Smith",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jVbkuQeMDqIkCIBYKE4ZQXioHZpojePZuw&s"
        },
        {
            initialIsFollowing: true,
            userName: "fitness_fanatic",
            name: "Michael Johnson",
            image: "https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg"
        },
        {
            initialIsFollowing: false,
            userName: "adventure_lover",
            name: "Emily Davis",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQleF0hGG2VMGD1qeQpEtM5Q3b4Pj6UH_WZ6Q&s"
        },
        {
            initialIsFollowing: true,
            userName: "music_enthusiast",
            name: "David Brown",
            image: "https://www.siquia.com/assets/uploads/2022/03/pexels-nickolas-johnston-9102983-750x990.jpg"
        }
    ];

    return (
        <>
            <TwitterFollowCard 
                initialIsFollowing={true}
                userName="TheNextFather" 
                image="https://img.freepik.com/free-photo/portrait-young-businessman-with-mustache-glasses-3d-rendering_1142-51509.jpg?t=st=1722030193~exp=1722033793~hmac=d317e524d69fcbaa2a5051788c2c1466ded5b75d04c6994b54e454ab91c0a54a&w=740" 
            >
                Anyelo Obregon
            </TwitterFollowCard>

            {people.map((user) => (
                <TwitterFollowCard 
                    key={user.userName} 
                    initialIsFollowing={user.initialIsFollowing}
                    userName={user.userName}            
                    image={user.image}
                >
                    {user.name}
                </TwitterFollowCard>
            ))}
        </>
    );
};
