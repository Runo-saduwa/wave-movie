import { mount } from "@vue/test-utils";
import { MovieDetailModal } from "@/components";

const mockProps = {
  type: "Movie",
  imdbRating: "8",
  title: "Wave",
  genre: "Action, Comedy",
  year: "2020",
  writers: "Runo, Tobi, Lekan",
  director: "John Doe",
  rated: "18",
  year: "2020",
  runtime: "50mins",
  awards: "Oscars",
};
describe("MovieDetailModal.vue", () => {
  const wrapper = mount(MovieDetailModal, {
    props: { ...mockProps },
  });

  it("renders props.rated when passed", () => {
    expect(wrapper.text()).toMatch(mockProps.rated);
  });
  it("renders props.writers when passed", () => {
    expect(wrapper.text()).toMatch(mockProps.writers);
  });
  it("renders props.director when passed", () => {
    expect(wrapper.text()).toMatch(mockProps.director);
  });
  it("renders props.awards when passed", () => {
    expect(wrapper.text()).toMatch(mockProps.awards);
  });
  it("renders props.runtime when passed", () => {
    expect(wrapper.text()).toMatch(mockProps.runtime);
  });
  it("renders props.type when passed", () => {
    expect(wrapper.text()).toMatch(mockProps.type);
  });
  it("renders props.imdbRating when passed", () => {
    expect(wrapper.text()).toMatch(mockProps.imdbRating);
  });
  it("renders props.title when passed", () => {
    expect(wrapper.text()).toMatch(mockProps.title);
  });
  it("renders props.genre when passed", () => {
    expect(wrapper.text()).toMatch(mockProps.genre);
  });
  it("renders props.year when passed", () => {
    expect(wrapper.text()).toMatch(mockProps.year);
  });
});
