import { computed, defineComponent, type PropType } from "vue";
import "../../base.less";
import "./style/button.less";

const Button = defineComponent({
  props: {
    type: {
      type: String as PropType<"primary" | "default" | "danger">,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<"small" | "middle" | "large">,
      default: "middle",
    },
  },
  setup(props, { slots }) {
    const classes = computed(() => {
      return [
        "dtd-button",
        `dtd-button-${props.type}`,
        `dtd-button-${props.size}`,
      ];
    });
    return () => (
      <button class={classes.value} disabled={props.disabled}>
        <span>{slots.default?.()}</span>
      </button>
    );
  },
});

export default Button;
