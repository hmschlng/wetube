const videos = [
  {
    title: "First Video",
    rating: 3,
    comments: 542,
    createdAt: "2 days ago",
    views: 1259,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 112,
    createdAt: "5 hours ago",
    views: 332,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 32,
    createdAt: "2 minutes ago",
    views: 45,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
}

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("watch", { pageTitle: `Watching ${video.title}`, video });
}

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
}

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
}

export const postUpload = (req, res) => {
  const { id } = req.params;
  const newVideo = {
    title: req.body.title,
    rating: 0,
    comments: 0,
    createdAt: "just now", 
    views: 0,
    id: videos.length+1,
  };
  videos.push(newVideo);
  //here we will add a video to the videos array.
  return res.redirect("/");
}

