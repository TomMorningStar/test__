import React, { useEffect } from "react";

const Content = ({ items }) => {
  const [post, setPost] = React.useState(null);

  const handleGetPost = (post) => {
    localStorage.setItem("post", JSON.stringify(post));
    setPost(post);
  };

  useEffect(() => {
    const retrievedObject = localStorage.getItem("post");
    setPost(JSON.parse(retrievedObject));
  }, []);

  return (
    <tbody>
      {!items.length && (
        <div className="notFound">Ничего не найдено по вашему запросу</div>
      )}
      {localStorage.length ? (
        <tr>
          <td className="id">{post?.id}</td>
          <td className="itemHeader">{post?.title}</td>
          <td className="itemHeader">
            {post?.tags.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </td>
          <td className="description">{post?.body}</td>
        </tr>
      ) : (
        items.map((item) => {
          return (
            <tr key={item.id}>
              <td className="id">{item.id}</td>
              <td onClick={() => handleGetPost(item)} className="itemHeader">
                {item.title}
              </td>
              <td className="itemHeader">
                {item.tags.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </td>
              <td className="description">{item.body}</td>
            </tr>
          );
        })
      )}
    </tbody>
  );
};

export default Content;
