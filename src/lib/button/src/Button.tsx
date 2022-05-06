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
  },
  setup(props, { slots }) {
    const classes = computed(() => {
      return ["dtd-button", `dtd-button-${props.type}`];
    });
    return () => (
      <button class={classes.value} disabled={props.disabled}>
        <span>{slots.default?.()}</span>
      </button>
    );
  },
});

export default Button;
