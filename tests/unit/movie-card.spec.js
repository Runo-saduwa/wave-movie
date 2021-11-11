import { shallowMount } from "@vue/test-utils";
import MovieCard from "@/components/MovieCard.vue";

const mockProps = {
  type: "Movie",
  imdbRating: "8",
  title: "Wave",
  genre: "Action, Comedy",
  year: '2020',
};
describe("MovieCard.vue", () => {
  const wrapper = shallowMount(MovieCard, {
    props: { ...mockProps },
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
