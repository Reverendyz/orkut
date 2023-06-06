import { 
    Button,
    Layout,
    Image,
    Input,
    List,
    Col,
    Row,
    Typography,
    Divider
} from "antd";
import { Content, Header } from "antd/es/layout/layout";
import orkut from "../assets/orkut.png";
import profile from "../assets/profile.jpeg";
import { MessageOutlined, PictureOutlined, PushpinFilled, StarOutlined } from "@ant-design/icons";
import NewsFeed from "./feed/NewsFeed";
const { Title } = Typography;

const profileOptions = [
    {
        id: "1",
        title: "Vibes",
        routeTo: "#",
        icon: <StarOutlined/>,
        count: Math.floor(Math.random() * 100)
    },
    {
        id: "2",
        title: "Profile",
        routeTo: "#",
        icon: null,
        count: Math.floor(Math.random() * 100)
    },
    {
        id: "3",
        title: "Scraps",
        routeTo: "#",
        icon: null,
        count: Math.floor(Math.random() * 100)
    },
    {
        id: "4",
        title: "Photos",
        routeTo: "#",
        icon: null,
        count: Math.floor(Math.random() * 100)
    },
    {
        id: "5",
        title: "Videos",
        routeTo: "#",
        icon: null,
        count: Math.floor(Math.random() * 100)
    },
    {
        id: "6",
        title: "Testimonials",
        routeTo: "#",
        icon: null,
        count: Math.floor(Math.random() * 100)
    },
]

export default function Main(){
    return (
        <>
            <Layout>
                <Header
                    style={{ display: 'flex', alignItems: 'center', backgroundColor: '#E2E8FD', textAlign: "center"}}
                    >
                    <Image
                        width={100}
                        src={orkut}/>
                    <Button className="main-btn">Home</Button>
                    <Button className="main-btn">Profile</Button>
                    <Button className="main-btn">Scraps</Button>
                    <Button className="main-btn">Communities</Button>
                    <Button className="main-btn">Applications</Button>
                    <Button className="main-btn">Get this Theme</Button>
                    <Input 
                        placeholder="Search..."
                        style={{
                            width: "200px", 
                            marginLeft: "20px"
                            }}/>
                    <Button>Search</Button>
                </Header>
                <Content style={{backgroundColor: '#E2E8FD'}}>
                    <Row
                        justify="space-around"
                        align="middle"
                        >
                        <Col span={6}
                            style={{
                                backgroundColor: 'white',
                                textAlign: "center",
                                }}>
                            <Image
                                width={300}
                                src={profile}
                                />
                            <Typography.Title
                                level={2}
                                style={{
                                    margin: 0,
                                }}
                                >
                                Kommi Tuayrman
                                </Typography.Title>
                            <List
                                style={{textAlign: "left", paddingLeft: "20px"}}
                                itemLayout="horizontal"
                                dataSource={profileOptions}
                                renderItem={(item, index)=>(
                                    <List.Item key={index}>
                                        <List.Item.Meta
                                            title={<a href={item.routeTo}>{item.title}</a>}
                                            avatar={item.icon}
                                        />
                                    </List.Item>
                                )}
                                >
                            </List>
                        </Col>
                        <Col
                            span={10}
                            style={{
                                backgroundColor: 'white',
                                textAlign: "center",
                                }}>
                            <Title level={2}>Hello, Felipe</Title>
                            <Row justify="space-between">
                                <Col>
                                    <Button type="text"><PushpinFilled/>Taggings</Button>
                                </Col>
                                <Col>
                                    <Button type="text"><PictureOutlined/>Photos</Button>
                                </Col>
                                <Col>
                                    <Button type="text"><PictureOutlined/>Photos with me</Button>
                                </Col>
                                <Col>
                                    <Button type="text"><StarOutlined/>Stars</Button>
                                </Col>
                                <Col>
                                    <Button type="text"><MessageOutlined/>Messages</Button>
                                </Col>
                            </Row>
                            <Divider orientation="left">News Feed</Divider>
                            <NewsFeed/>
                        </Col>
                        <Col
                            span={6}
                            style={{backgroundColor: 'white'}}>
                            Some content
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </>
    )
}