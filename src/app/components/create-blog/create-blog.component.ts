import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/blogPost';
import { BlogPostService } from 'src/app/services/blog-post.service';
import { TagService } from 'src/app/services/tag.service';
import { Tag } from 'src/app/tag'

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  title:string = "";
  body:string = "";
  recipe:string = "";
  imgUrl:string = "";
  tags:string = "";
  tagList: Tag[];

  constructor(private tagService:TagService, private blogService:BlogPostService) { }

  ngOnInit(): void {
    this.getTags();
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
      id: 0,
      title: this.title,
      content: this.body,
      recipe: this.recipe,
      imageUrl: this.imgUrl,
      tags: this.createTags(),
      user: null
    }
    console.log(blogPost)

    return blogPost;

  }

  addBlogPost(blogPost:BlogPost){
    this.blogService.addBlogPost(blogPost).subscribe(
      response => {
        console.log(response)
      }
    )
    this.addTags();
    this.clearFields();
  }

  addTags(){
    let tagList = this.tags.split(',')
    let convertedTag = <Tag> {};
    let uniqueNames = this.tagList.map(tag => tag.name);

    for(let tag of tagList){
      if(uniqueNames.indexOf(tag) >= 0)
        continue;

      convertedTag = {id: 0, name:tag}
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

}
