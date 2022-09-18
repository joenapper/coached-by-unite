import { StyledLoader, LoaderContent, LoaderIcon } from "./styles";

const Loader = () => (
  <StyledLoader>
    <LoaderContent>
      <LoaderIcon />
      <LoaderIcon />
      <LoaderIcon />
    </LoaderContent>
  </StyledLoader>
);

export default Loader;
