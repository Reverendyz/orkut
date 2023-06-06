import { Avatar, Space, List } from "antd";
import { useState } from "react"
import Camila from "../../assets/feed/camila-avatar.jpeg";
import Hailla from "../../assets/feed/hailla-avatar.jpg";
import Eduardo from "../../assets/feed/eduardo-avatar.jpg";
import Rafa from "../../assets/feed/rafa-avatar.jpg";
import Luis from "../../assets/feed/luis-avatar.jpg";
import Richard from "../../assets/feed/richard-avatar.jpeg";
import Flor from "../../assets/feed/flor.jpg";


export default function NewsFeed(){

    var feedItems = [
        {
            id: 1,
            owner: "Gustavo",
            update: "Fui na academia e comprei Whey...",
            avatar: Richard,
        },
        {
            id: 2,
            owner: "Rafael",
            update: "Joguei um alex que n teve condicoes",
            avatar: Rafa,
        },
        {
            id: 3,
            owner: "Hailla",
            update: "To fazendo um programa pro meu amorzinho...",
            avatar: Hailla,
        },
        {
            id: 4,
            owner: "Argentino",
            update: "Sou o tiozao da academia. Mas sou cabeludo!",
            avatar: Luis,
        },
        {
            id: 5,
            owner: "Carioca",
            update: "Bora pegar umas novinha ai gente!",
            avatar: null,
        },
        {
            id: 6,
            owner: "Camila",
            update: "Ninguem corrige meus \"prano\". Vai treinar, vai!",
            avatar: Camila,
        },
        {
            id:7,
            owner: "Eduardo",
            update: "Olha que gostosa, meu!",
            avatar: Eduardo,
        },
        {
            id: 8,
            owner: "Carlos",
            update: "Flw flw flw flw flw flw flw",
            avatar: Flor,
        }
    ];
    const [feed, setFeed] = useState(feedItems);

    const isEmpty = feed == null || feedItems.length === 0;

    if (isEmpty) {
        return null;
    }

    return (
        <Space>
            <List
                dataSource={feedItems}
                renderItem={(item) => (
                    <List.Item 
                        key={item.id}>
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar}/>}    
                            title={item.owner}
                        />
                        {item.update}
                    </List.Item>
                )}>
            </List>
        </Space>
    )
}