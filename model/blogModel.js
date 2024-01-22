module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define("blog", {
    title: {
      type: DataTypes.STRING,
    
    },
    subtitle: {
      type: DataTypes.STRING,
    
    },
    description: {
      type: DataTypes.TEXT,

    }
    
  
  });
  return Blog;
};