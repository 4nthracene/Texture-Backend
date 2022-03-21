const { default: mongoose } = require("mongoose");
const config = require("../config");
const PostModel = require("../models/post.model");
const testBlogData = [
    {
        title: "The day i realised i wanted to be a programmer, and not an IITian",
        description: "This is basically my story of how i wasn't able to crack JEE but i still managed to become a well paying programmer.",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar lorem quis ornare iaculis. Proin et justo bibendum, elementum lectus ut, condimentum lorem. In ultricies orci neque, nec pretium lorem commodo nec. Cras condimentum urna erat, id bibendum enim accumsan at. Nunc et tellus in dui pharetra efficitur vel vitae ex. Suspendisse vitae erat nec ex consectetur imperdiet. Duis imperdiet laoreet ante et rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean sit amet malesuada tortor, ut vestibulum purus. Maecenas et arcu et purus volutpat rhoncus. Sed fermentum, elit id condimentum imperdiet, ligula enim varius libero, non porta massa leo vitae ante. Cras et fermentum nulla.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at quam consectetur velit tempor volutpat. Maecenas vehicula lacus nec sem lobortis, vel pretium lectus ullamcorper. Aenean ut consequat arcu, quis condimentum justo. Nunc vestibulum leo justo, a ullamcorper lorem cursus ut. Aenean eget risus dolor. Integer non tristique neque. Nunc eu enim eget tellus cursus consectetur sit amet sit amet enim. Aliquam tincidunt hendrerit elit, vel mattis risus pretium nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices sed tortor quis sollicitudin. Maecenas nec aliquam erat. Sed quis urna eros. Vivamus imperdiet erat eget hendrerit scelerisque.

Cras vehicula diam eget malesuada dapibus. Sed lacus odio, posuere et sagittis et, tempor eu dolor. Donec erat justo, blandit a suscipit sed, interdum sit amet mauris. Duis sit amet nulla orci. Morbi vitae dolor sit amet velit accumsan dapibus vel ut diam. Morbi in nunc nibh. Sed commodo tellus scelerisque dictum lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque dapibus fermentum maximus. Fusce tincidunt congue faucibus. Nullam a gravida turpis. Vivamus eget egestas est.

Nam mattis molestie faucibus. Aenean et semper purus. Vestibulum interdum tellus ac fermentum finibus. Maecenas quis semper mauris. Aliquam varius lacinia lorem, sed iaculis neque dapibus eu. Integer lacinia lobortis eleifend. Pellentesque eget ornare lectus. Vivamus euismod, dolor vel fringilla vehicula, diam sapien varius turpis, at egestas tellus tellus blandit ligula. Morbi non velit neque. Ut maximus elit ac porttitor ultricies. Aenean ut enim bibendum, faucibus odio non, volutpat metus. In rutrum in ligula eget suscipit. Vestibulum rhoncus hendrerit turpis, vitae elementum nibh ultrices et. Aliquam ullamcorper enim arcu, eget aliquet sem accumsan a.

Pellentesque tristique mauris ante, nec tristique enim ultricies et. Quisque eu dolor viverra, laoreet ligula id, placerat massa. Ut ultricies, nisi in posuere condimentum, leo felis rutrum turpis, vitae varius dui lorem quis dolor. Fusce porta ut urna vel placerat. Donec ligula dolor, ornare id blandit id, mollis non nulla. Vestibulum fermentum lectus eget scelerisque pellentesque. Etiam et ex sollicitudin, gravida risus in, cursus dolor. Cras magna risus, malesuada ullamcorper varius vitae, efficitur eget est. Ut ultrices rhoncus purus non cursus. Sed nec libero faucibus turpis suscipit faucibus. Donec tristique viverra euismod. Etiam non eros venenatis, rhoncus tellus sodales, eleifend neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur fermentum vulputate nunc, eget viverra ex semper eu.

Aliquam sem nisi, commodo eu condimentum vitae, consequat eu justo. In sed nisi sit amet ligula accumsan tincidunt. Etiam risus arcu, convallis nec luctus vitae, ullamcorper ac tortor. Suspendisse at neque sed sem convallis eleifend et at leo. Morbi a diam varius nisi mattis dapibus vel lobortis lorem. Donec id fringilla augue, vel porta neque. Nullam malesuada at nulla in imperdiet. Donec ut nisl luctus, viverra eros quis, finibus quam. Donec porta mollis leo. Aenean hendrerit ante a eros tincidunt sodales. Donec id erat lobortis, mollis tellus sit amet, lobortis mi. Pellentesque nec accumsan neque.

Sed tempus eleifend pretium. Sed ut euismod ipsum. Ut interdum erat vitae dignissim mattis. Donec sagittis ornare tempor. Morbi quis feugiat mi. Nam elementum consequat elit a placerat. Nulla egestas erat nibh, non ornare nisl convallis eget. Duis consectetur metus a libero malesuada, eget ornare ante sagittis. Suspendisse ac condimentum nibh. Etiam lobortis lacinia ipsum eget mollis. Morbi turpis est, dignissim et neque eu, dictum posuere arcu. Suspendisse mollis dolor sit amet sapien laoreet, ac malesuada felis egestas. Aliquam pulvinar risus vel libero pretium, et vulputate dolor accumsan. Nulla hendrerit a magna in ullamcorper. Donec ac dignissim orci.

Cras sed elementum elit. Sed pellentesque augue ut lorem porttitor scelerisque. Vestibulum a rhoncus ex. Aenean suscipit dolor et odio eleifend tincidunt at facilisis ante. Vivamus porta aliquet rhoncus. Vivamus porta porttitor vulputate. Mauris vitae erat sit amet ligula malesuada porta. Quisque a augue non augue iaculis auctor. Vivamus at dictum magna, eu scelerisque mi.`,
        tags: ["life story", "education", "programming"]

    }
]

async function main() {

    try {

        await mongoose.connect(config.DB_URI)
        console.log('!!!!DATABASE CONNECTED!!!!!')
        const posts = await PostModel.find();
        console.log(posts);
        console.log(`[SEEDER] deleting existing data in the data lake`)
        posts.forEach(async (post) => {
            const deletedPost = await PostModel.findByIdAndDelete(post._id);
            console.log(`[SEEDER] Document with id: ${deletedPost._id} has been deleted`);
        });
        console.log(`[SEEDER] deleted posts.`);
        testBlogData.forEach(async (post, i) => {
            const newPost = new PostModel(post);
            try {
                const { _id } = await newPost.save();
                console.log(`[SEEDER] document at index ${i} is seeded with an id: ${_id}`);
            } catch (error) {
                console.error(error.message);
            }
        })
    } catch (error) {
        console.log(error.message)
    }
}

main();