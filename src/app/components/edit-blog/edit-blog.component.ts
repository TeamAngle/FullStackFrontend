import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { BlogPost } from 'src/app/blogPost';
import { BlogPostService } from 'src/app/services/blog-post.service';
import { TagService } from 'src/app/services/tag.service';
import { Tag } from 'src/app/tag';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  title:string = "";
  body:string = "";
  recipe:string = "";
  imgUrl:string = "";
  tags:string = "";
  tagList: Tag[];
  blogPost:BlogPost;
  navigated:boolean = false;

  constructor(private route: ActivatedRoute, private tagService:TagService, private blogService:BlogPostService, private app: AppComponent) { }

  ngOnInit(): void {
    this.getTags();
    this.route.params.forEach(
      (params: Params) => {
        if(params['id'] !== undefined) {
          const id = params['id'];
          this.navigated = true;
          console.log(id)
          this.getBlogPost(id);
          this.blogPost.content.replace('\\n', '<br />')
        }
      }
    )
  }

  onSubmit(){
    if(!this.hasRequiredFields())
      return;

    console.log('has required fields')
    this.addBlogPost(this.convertToBlogPost())
  }

  hasRequiredFields() : Boolean{
    return (
      this.title.length > 0 &&
      this.body.length > 0 
    )
  }

  convertToLowerCase(text) {
    this.tags = this.tags.toLowerCase();
  }

  convertToBlogPost() :BlogPost{
    let blogPost = <BlogPost> {
      id: this.blogPost.id,
      title: this.title,
      content: this.body,
      recipe: this.recipe,
      imageUrl: this.imgUrl,
      tags: this.createTags(),
      user: this.app.user 
    }
    console.log(blogPost)

    return blogPost;

  }

  addBlogPost(blogPost:BlogPost){
    this.blogService.updateBlogPost(blogPost, blogPost.id).subscribe(
      response => {
        console.log(response)
      }
    )
    this.addTags();
    window.location.replace('userhome')
  }

  addTags(){
    let tagList = this.tags.split(',')
    let convertedTag = <any> {};
    let uniqueNames = this.tagList.map(tag => tag.name);

    for(let tag of tagList){
      if(uniqueNames.indexOf(tag) >= 0)
        continue;

      convertedTag = {name:tag}
      this.tagService.addTag(convertedTag).subscribe(()=>{console.log('completed add tag')})
    }
  }

  getTags(){
    this.tagService.getTags().subscribe(
      tags => {
        this.tagList = tags;
      }
    )
  }

  clearFields(){
    this.title = "";
    this.tags = "";
    this.body = "";
    this.imgUrl = "";
    this.recipe = "";
  }

  createTags(){
    let tagNames: string[] = this.tags.split(',');
    let tagList = [];
    
    tagNames.forEach(tagName => {
      tagList.push({name:tagName})
    })

    return tagList;
  }

  getBlogInfo(){
    this.title = this.blogPost.title;
    this.body = this.blogPost.content;
    this.recipe = this.blogPost.recipe;
    this.imgUrl = this.blogPost.imageUrl;
    this.blogPost.tags.forEach(tag => {
      this.tags += tag + ","
    })
    this.tags = this.tags.slice(0, this.tags.length - 1);
  }

  getBlogPost(id: number): void {
    this.blogService.getBlogPost(id).subscribe(
      (response: BlogPost) => {
        this.blogPost = response;
        this.getBlogInfo();
      }
    )
  }
}
