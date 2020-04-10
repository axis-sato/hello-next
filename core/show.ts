type Image = {
  medium: string;
};

type Show = {
  id: string;
  name: string;
  summary: string;
  image?: Image;
};

export default Show;
