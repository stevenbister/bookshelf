const fakeData_series = {
  allBook: [
    {
      _id: 'f4e7685b-1119-411f-855b-6f77e4816f6b',
      title: 'The Eye of the World',
      slug: {
        current: 'the-eye-of-the-world',
      },
      readStatus: ['Read'],
      cover: {
        asset: {
          url: 'https://cdn.sanity.io/images/vvmrkra8/production/3a0831dc96a22f3ae304e80e44e76e05e0bcb5c8-319x500.jpg',
          altText: null,
          metadata: {
            lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAcEBQgBBv/EACYQAAEDAwQCAQUAAAAAAAAAAAIBAwQAERIFBiExFEEHExUzYXH/xAAXAQADAQAAAAAAAAAAAAAAAAABAgME/8QAHBEAAgEFAQAAAAAAAAAAAAAAAAESAgMTITFB/9oADAMBAAIRAxEAPwCTpmymHtEKdfBUvZpweVSuJpEViNl4pOH6EUpuyYKAZpgBMdpivdQwaFxt9kY6IpIluPdUk3sz40tCg+3OD+WCKEvNr+qKazmy4z5kbxviV7WQvVFHIhMFRS7H3NEnbShvyjwU7qqZ3UV/dWyT9OHJ/wAxwsUyxv1WVNuaq9DaRspKk0XKt2Xj+V69jcsEoRACyCI0UVEl4Sp8XRld8Y1dX+XtEYnG19fJR4VR6orNczSWDkuGkgkQlvbHqikkgyqP/9k=',
          },
        },
      },
    },
    {
      _id: 'eb00b46d-45ef-456c-91c6-14d367cbe611',
      title: 'The Great Hunt',
      slug: {
        current: 'the-great-hunt',
      },
      readStatus: ['Read'],
      cover: {
        asset: {
          url: 'https://cdn.sanity.io/images/vvmrkra8/production/a1edf48182cb87b4216d07c05aac08b7ffa9e8d6-636x1000.jpg',
          altText: null,
          metadata: {
            lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUGBAP/xAAkEAACAQQBBAIDAAAAAAAAAAABAgMABBEhEwUGEjFBUSJhkf/EABgBAAIDAAAAAAAAAAAAAAAAAAECAAQF/8QAGxEAAgMAAwAAAAAAAAAAAAAAAAECAxESIlH/2gAMAwEAAhEDEQA/AI/oHZCXXY0nXnu4cIWPAw3gfv7qUYCSZlijQgD69VR9kiCWxa3muJij7aEE+IP3imV70yy5A0cSogz5H0Rj0f7VmD6mPfLLcXhAP05i5yN0U/m4+VjkEnZ3RQ0VWGDtu7a0PmsqocjR+apLzrqzW5jV4kyNkbJqDtntyq+c7qcbAWtnJZiItyuD8fjSRliHvg5WajtJOnI2yd+6KWzXkaviM+Qx7K0VOTCqz//Z',
          },
        },
      },
    },
    {
      _id: 'f5b7f718-a1bb-4849-a4cd-e0fdf943ff60',
      title: 'The Dragon Reborn',
      slug: {
        current: 'the-dragon-reborn',
      },
      readStatus: ['Read'],
      cover: {
        asset: {
          url: 'https://cdn.sanity.io/images/vvmrkra8/production/d90837d11d107daddab976b675728cebe63c7241-429x675.webp',
          altText: null,
          metadata: {
            lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAgEBQcG/8QAKRAAAgEDAwIEBwAAAAAAAAAAAQIDAAQRBQYSITETMkJxBxUiQVFhgf/EABgBAAMBAQAAAAAAAAAAAAAAAAABBAID/8QAGxEAAgIDAQAAAAAAAAAAAAAAAAECEgMRMUH/2gAMAwEAAhEDEQA/AOQ278Mp5trfOYbyJT5liZcMR71V7l0m+ttNaTwI39P0jOK3+30nhDJblQIj5UBwD/KgT7dSAsEVXjPViTnBros7RNLEmxT20w8jzSTl+hRTKybPtpXZ0KxgnqOGaKLxNVmQbHeLPeETOef4bsfareLWrSTMk05jB78m6Cl/W58UK7XciMOvRaLi7e4Qq9/Kqn0he9T96NSfpuM+/wDSIZWjEjPxOMjtRS+TPGkhVZXYD7kUUaFeR//Z',
          },
        },
      },
    },
    {
      _id: '8d1f5d74-7ed0-414f-a200-0f36fe1f3827',
      title: 'The Shadow Rising',
      slug: {
        current: 'the-shadow-rising',
      },
      readStatus: ['Read'],
      cover: {
        asset: {
          url: 'https://cdn.sanity.io/images/vvmrkra8/production/0edb9786935bcc26ddd6c5488d90430b1b137c00-318x500.jpg',
          altText: null,
          metadata: {
            lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQGBwX/xAAlEAABAwMEAgIDAAAAAAAAAAACAQMEAAURBhIhMVFhBxMUIkH/xAAXAQADAQAAAAAAAAAAAAAAAAABAwQA/8QAHBEAAgICAwAAAAAAAAAAAAAAAAEDERIxIlFS/9oADAMBAAIRAxEAPwCJtugZTui5F9WRHwGVRgk5VE91MiLSt4IQRxPVVtplMy4QxlmO7C5JncuM0TbTAbUCLbjK7i8J/KfQkgHILhmpCnC+KKo3vxVP9DTGPNFHEFmgM6Lhw5CuxJAuj1wuKckaXKUwrbAESr3WcxJM+Phwbi77TmnQ1TcRTi4PIvSd1BlI9Ms4LaO098aP/YuCJKKnndZ3kCwNwcJPK5ooXP6NcPR//9k=',
          },
        },
      },
    },
    {
      _id: 'be14aae5-f96f-448f-b491-2b4f3dc2432d',
      title: 'The Fires of Heaven',
      slug: {
        current: 'the-fires-of-heaven',
      },
      readStatus: ['read'],
      cover: {
        asset: {
          url: 'https://cdn.sanity.io/images/vvmrkra8/production/5144fb28ef028dc87d1ea697a55b31c6eb20d86a-318x500.jpg',
          altText: null,
          metadata: {
            lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUGAwH/xAAnEAACAgIBAgQHAAAAAAAAAAABAgMEABESBTEGIWFxBxMiI0GBwf/EABcBAAMBAAAAAAAAAAAAAAAAAAIDBQH/xAAbEQEAAgMBAQAAAAAAAAAAAAABAAIDEROBUf/aAAwDAQACEQMRAD8Alq3w4ir+F5ury3IGii3yj/J/f8yJjgSuJHmr/MUrqMKO7HtlOHqy25436hO6ltmryPAH2zd0pz1+EoCwliGYHRUa8jky+ZqgeylTFVFt5JKPo7OoaSHTHzI32wxrShRI2FeyWj5HW22R6YYTZ+xegiw2TV8TTmJ1PJgNMO+NuodZ415IVgiRT3Y9/bJOV4rNxp5ZyshIPkpzsxhlLlrDen0nD5OybXJXTN6NsLE33OO3J1vDEkvBHIWQsO+9awxjiIjrP//Z',
          },
        },
      },
    },
    {
      _id: '3d19a1b4-5633-4f4b-bba9-d8359257197c',
      title: 'Lord of Chaos',
      slug: {
        current: 'lord-of-chaos',
      },
      readStatus: ['reading'],
      cover: {
        asset: {
          url: 'https://cdn.sanity.io/images/vvmrkra8/production/239bfc41551feb4ae8631f8dee7af1c3130daf31-318x499.jpg',
          altText: null,
          metadata: {
            lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfABQDASIAAhEBAxEB/8QAGgAAAQUBAAAAAAAAAAAAAAAAAAIDBQYHBP/EACcQAAEDAwQBAwUAAAAAAAAAAAECAxEABAUGEiExIgcTFCNBUWFx/8QAFwEBAQEBAAAAAAAAAAAAAAAABAYCBf/EACERAAEEAgEFAQAAAAAAAAAAAAEAAgMRBBITISIxcYHx/9oADAMBAAIRAxEAPwBfo/pxp/COZZ11qHCQlB7EVddRY6xRhHjsQpQTyr71mulsczZ4ou2uSeQOyyT47v5Vly7rSbJDvzZSU7HEz1xUfls5pN4fX1V0RdF2TH8WTZJwMXa0MqlHYMUU/lUNi7IbBiB3FFOa4ULW3NN9FC6c1Pee24lhtCoMeZ4NWfJamuE4htpxpoE8rUszz+qzzCXjFqxCVwonnxmnMhdi5bJeuVJTMABFLdinkpooLmtygY9nm3UuK9zbpuV/UJ57BoqHuW2kukIdKh+dsUU4Y8YHhBOXKTey/9k=',
          },
        },
      },
    },
  ],
};

export default fakeData_series;
