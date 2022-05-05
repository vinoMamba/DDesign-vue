import { defineComponent } from "vue";
import "../../base.less";
import "./style/button.less";
import { Settings } from "@vicons/ionicons5";

const Button = defineComponent({
  setup() {
    return () => (
      <button class="dtd-button">
        <Settings />
        test
      </button>
    );
  },
});

export default Button;
