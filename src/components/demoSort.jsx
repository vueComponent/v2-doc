import { inject } from 'vue';

export default {
  props: {
    cols: {
      type: [Number, String],
      default: 2,
    },
  },
  setup() {
    return {
      demoContext: inject('demoContext', {}),
    };
  },
  render() {
    const { cols, $slots } = this;
    const isSingleCol = cols === 1;
    const leftChildren = [];
    const rightChildren = [];
    const children = $slots.default?.() || [];
    children.forEach((demo, index) => {
      if (index % 2 === 0 || isSingleCol) {
        leftChildren.push(demo);
      } else {
        rightChildren.push(demo);
      }
    });
    return (
      <a-row gutter={16}>
        <a-col
          span={isSingleCol ? 24 : 12}
          class={isSingleCol ? 'code-boxes-col-1-1' : 'code-boxes-col-2-1'}
        >
          {leftChildren}
        </a-col>
        {isSingleCol ? null : (
          <a-col class="code-boxes-col-2-1" span={12}>
            {rightChildren}
          </a-col>
        )}
      </a-row>
    );
  },
};
