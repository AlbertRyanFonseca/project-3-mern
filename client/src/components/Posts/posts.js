import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Auth from "../../utils/auth"
import { removePostId, savePostIds } from "../../utils/localStorage";
import { QUERY_ME } from "../../utils/queries";
import { REMOVE_POST } from "../../utils/mutations";

import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";

const Posts = () => {
    const { loading, data } = useQuery(QUERY_ME);
    const userData = data?.me || [];
  
    const [removePost, { error }] = useMutation(REMOVE_POST);
  
    const handleDeletePost = async (postId) => {
      const token = Auth.loggedIn() ? Auth.getToken() : null;
      if (!token) {
        return false;
      }
      try {
        const response = await removePost({
          variables: { postId: postId },
        });
  
        if (!response) {
          throw new Error("something went wrong!");
        }
        removePostId(postId);
      } catch (err) {
        console.error(error);
      }
    };

  if (loading) {
    return <h2>LOADING</h2>;
  }

  // sync localStorage
  const savedPostIds = userData.Posts.map((post) => post.postId);
  savePostIds(savedPostIds);

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Viewing saved Posts!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.Posts.length
            ? `Viewing ${userData.Posts.length} saved ${
                userData.Posts.length === 1 ? "post" : "posts"
              }:`
            : "You have no saved post!"}
        </h2>
        <CardColumns>
          {userData.Posts.map((post) => {
            return (
              <Card key={post.postId} border="dark">
                {post.image ? (
                  <Card.Img
                    src={post.image}
                    alt={`The cover for ${post.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.description}</Card.Text>
                  <Button
                    className="btn-block btn-danger"
                    onClick={() => handleDeletePost(post.postId)}
                  >
                    Delete this post!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default Posts;
