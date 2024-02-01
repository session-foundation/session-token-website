import { stripHtmlFromString } from "lib/utils";
import portableText from "schemas/partials/portableText";

export const copyAndImage = {
    name: "copyAndImage",
    type: "object",
    title: "Copy & Image",
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            return {
                title: title ? stripHtmlFromString(title) : "Untitled Copy & Image",
                subtitle: "Copy & Image",
            };
        },
    },
    fields: [
        {
            name: 'title',
            type: 'string',
        },
        portableText("copy", "Copy"),
        portableText("subCopy", "Sub-copy"),
        {
            name: "image",
            type: "image",
            options: { hotspot: true },
        },
        {
            name: 'button',
            type: 'button',
        },
        {
            name: 'alignment',
            type: 'string',
            options: {
                list: [
                    {
                        value: 'imageLeft',
                        title: 'Image left'
                    }, {
                        value: 'imageRight',
                        title: 'Image right'
                    }
                ]
            }
        }
    ],
};
