import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const HomePage = () => {
  const [post, setPost] = useState([]);
  const [morePost, setMorePost] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios
      .get("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518")
      .then((response) => {
        setPost(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addPageNumber = () => {
    for (let i = 0; i <= 3; i++) {
      return i;
    }
  };

  const getMorePosts = () => {
    axios
      .get(
        "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=2"
      )
      .then((response) => {
        setMorePost(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {post &&
        post.map((item) => {
          return (
            <div>
              <p key={item.id}>
                <strong>{item.title.rendered}</strong>
              </p>
              <a href={item.slug}>{item.title.rendered}</a>
            </div>
          );
        })}

      <button onClick={getMorePosts}>Carregar mais...</button>
    </div>
  );
};

export default HomePage;
