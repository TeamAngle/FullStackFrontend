import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/blogPost';
import { BlogPostService } from 'src/app/services/blog-post.service';
import { TagService } from 'src/app/services/tag.service';
import { Tag } from 'src/app/tag';

@Component({
  selector: 'app-search-blog',
  templateUrl: './search-blog.component.html',
  styleUrls: ['./search-blog.component.css']
})
export class SearchBlogComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  tags: Tag[] = [];
  blogPostTitles: string[] = [];
  tagnames: string[] = [];
  matchedBlogPosts: BlogPost[] = [];
  searchText: string;
  searchByTag: boolean = true;

  constructor(private blogPostService: BlogPostService, private tagService: TagService) { }

  ngOnInit(): void {
    this.getBlogPosts()
    this.getTags();
  }

  getTags(){
    this.tagService.getTags().subscribe(
      tags => {
        this.tags = tags;
        this.tagnames = this.tags.map(
          tag => tag.name
        )
      }
    )
  }

  getBlogPosts(){
    this.blogPostService.getBlogPosts().subscribe(
      blogPosts => {
        this.blogPosts = blogPosts;
        this.blogPostTitles = this.blogPosts.map(
          post => post.title
        )
      }
    )
  }

  getMatchedBlogPosts() {
    if(this.searchByTag){
      this.getMatchByTag()
    } else {
      this.getMatchByTitle();
    }
  }

  getMatchByTag(){
    this.matchedBlogPosts = [];
    if(this.searchText.length == 0)
      return;

    let searchTerms = this.searchText.trim().split(' ');
    for(let tagname of this.tagnames){
      for(let term of searchTerms){
        if(tagname.toLowerCase().includes(term.toLowerCase())){
          let tag = this.tags[this.tagnames.indexOf(tagname)];
          tag.blogPosts.forEach(post => this.matchedBlogPosts.push(post))
        }
      }
    }
  }

  getMatchByTitle(){
    console.log('running matched blog posts')
    this.matchedBlogPosts = [];
    if(this.searchText.length == 0)
      return
    let searchTerms = this.searchText.trim().split(' ');
    console.log(searchTerms)
    for(let post of this.blogPostTitles){
      for(let term of searchTerms){
        if(post.toLowerCase().includes(term.toLowerCase())){
          this.matchedBlogPosts.push(this.blogPosts[this.blogPostTitles.indexOf(post)])
          console.log('found match')
          continue;
        }
      }
    }
  }

  toggleSearchByTag(){
    console.log('hitting radio button')
    this.searchByTag = !this.searchByTag;
  }

}
