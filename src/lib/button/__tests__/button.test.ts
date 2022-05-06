import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { DButton } from "../../";

describe("Button", () => {
  it("can set slot", () => {
    const wrapper = mount(DButton, {
      slots: {
        default: "ok",
      },
    });
    expect(wrapper.text()).toBe("ok");
  });
  it("can set primary type", () => {
    const wrapper = mount(DButton, {
      props: {
        type: "primary",
      },
    });
    expect(wrapper.classes()).toContain("dtd-button-primary");
  });
  it("can set danger type", () => {
    const wrapper = mount(DButton, {
      props: {
        type: "danger",
      },
    });
    expect(wrapper.classes()).toContain("dtd-button-danger");
  });
  it("can set disabled prop", async () => {
    const wrapper = mount(DButton, {
      props: {
        disabled: true,
      },
    });
    expect(await wrapper.find("button").trigger("click")).toBeFalsy();
  });
  it("can set size prop", () => {
    const wrapper = mount(DButton, {
      props: {
        size: "large",
      },
    });
    expect(wrapper.classes()).toContain("dtd-button-large");
  });
});
