const RepositoryItem = ({
  name,
  linkToRepo,
  fullname,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <h4>Full Name:</h4>
      <a href={linkToRepo} target="_blank">
        {fullname}
      </a>
    </div>
  );
};

export default RepositoryItem;
