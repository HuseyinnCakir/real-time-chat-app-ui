import {
  Container,
  CssBaseline,
  Grid,
  Paper,
  ThemeProvider,
  createTheme,
  styled,
} from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes";
import { ApolloProvider } from "@apollo/client";
import client from "./constants/apollo-client";
import Guard from "./components/auth/Guard";
import Header from "./components/header/Header";
import Snackbar from "./components/snackbar/Snackbar";
import ChatList from "./components/chat-list/ChatList";
import { usePath } from "./hooks/usePath";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const App = () => {
  const { path } = usePath();

  const showChatList = path === "/" || path.includes("chats");

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Guard>
          <Container maxWidth="xl" sx={{ marginTop: "1rem" }}>
          {showChatList ? (
            <Grid container spacing={5}>
              <Grid size={{ xs:12, md:5, lg:4 ,xl:3 }}>
              <Item></Item>
              <ChatList />
              </Grid>
              <Grid size={{  md:7, lg:8 ,xl:9 }}>
              <Item></Item>
              <Routes />
              </Grid>
              
            </Grid>
          ) : (
            <Routes />
          )}
          </Container>
        </Guard>
        <Snackbar />
      </ThemeProvider>
    </ApolloProvider>
  );
};

const Routes = () => {
  return (
   
      <RouterProvider router={router} />
    
  );
};

export default App;