import { Context, Schema } from "koishi";

export const name = "60snews";
const koishi_1 = require("koishi");
export interface Config {}

export const Config: Schema<Config> = Schema.object({});

export function apply(ctx: Context) {
  // write your plugin here
  ctx.command("news", "60s新闻资讯").action(async ({ options }) => {
    try {
      const data = await ctx.http.get("https://api.03c3.cn/zb/", {
        responseType: "arraybuffer",
      });
      return koishi_1.segment.image(data);
    } catch (error) {
      ctx.logger("tools").warn(error);
      return "请求失败。";
    }
  });
}
